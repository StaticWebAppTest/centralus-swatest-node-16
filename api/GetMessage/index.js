module.exports = async function (context, req) {
  const date = "2022-10-27T14:22:27.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

