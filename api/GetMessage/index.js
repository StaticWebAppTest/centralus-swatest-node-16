module.exports = async function (context, req) {
  const date = "2023-11-16T14:09:00.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

