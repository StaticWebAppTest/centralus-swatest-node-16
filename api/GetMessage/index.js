module.exports = async function (context, req) {
  const date = "2023-12-24T13:09:27.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

