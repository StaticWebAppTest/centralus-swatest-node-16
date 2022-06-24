module.exports = async function (context, req) {
  const date = "2022-06-24T09:10:21.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

