module.exports = async function (context, req) {
  const date = "2024-05-19T10:09:09.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

