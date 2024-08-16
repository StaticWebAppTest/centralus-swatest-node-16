module.exports = async function (context, req) {
  const date = "2024-08-16T11:09:52.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

