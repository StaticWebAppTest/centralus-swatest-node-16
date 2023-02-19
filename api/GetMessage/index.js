module.exports = async function (context, req) {
  const date = "2023-02-19T10:09:45.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

