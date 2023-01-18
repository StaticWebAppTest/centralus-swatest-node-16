module.exports = async function (context, req) {
  const date = "2023-01-18T09:09:54.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

