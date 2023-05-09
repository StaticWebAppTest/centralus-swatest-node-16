module.exports = async function (context, req) {
  const date = "2023-05-09T17:07:50.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

