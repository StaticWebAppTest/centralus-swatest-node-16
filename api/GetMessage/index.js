module.exports = async function (context, req) {
  const date = "2023-11-19T17:07:25.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

