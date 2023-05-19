module.exports = async function (context, req) {
  const date = "2023-05-19T21:07:32.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

