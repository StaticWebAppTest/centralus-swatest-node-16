module.exports = async function (context, req) {
  const date = "2022-07-25T09:11:07.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

