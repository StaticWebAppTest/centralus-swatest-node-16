module.exports = async function (context, req) {
  const date = "2024-02-16T14:09:06.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

