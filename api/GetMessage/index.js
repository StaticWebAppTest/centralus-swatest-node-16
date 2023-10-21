module.exports = async function (context, req) {
  const date = "2023-10-21T07:07:45.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

