module.exports = async function (context, req) {
  const date = "2023-05-12T17:07:45.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

