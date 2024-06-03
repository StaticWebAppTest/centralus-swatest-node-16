module.exports = async function (context, req) {
  const date = "2024-06-03T15:11:07.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

