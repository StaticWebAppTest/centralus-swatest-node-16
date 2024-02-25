module.exports = async function (context, req) {
  const date = "2024-02-25T09:08:00.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

