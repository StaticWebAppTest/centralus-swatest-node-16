module.exports = async function (context, req) {
  const date = "2023-02-25T15:09:00.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

