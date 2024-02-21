module.exports = async function (context, req) {
  const date = "2024-02-21T09:11:09.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

