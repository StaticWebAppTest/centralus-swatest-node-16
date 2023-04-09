module.exports = async function (context, req) {
  const date = "2023-04-09T11:06:45.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

