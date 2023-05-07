module.exports = async function (context, req) {
  const date = "2023-05-07T17:07:08.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

