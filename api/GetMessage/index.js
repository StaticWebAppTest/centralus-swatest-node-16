module.exports = async function (context, req) {
  const date = "2024-05-27T09:11:09.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

