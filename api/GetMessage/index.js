module.exports = async function (context, req) {
  const date = "2023-08-24T11:07:08.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

