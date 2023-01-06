module.exports = async function (context, req) {
  const date = "2023-01-06T05:09:07.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

