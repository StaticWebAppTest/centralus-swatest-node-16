module.exports = async function (context, req) {
  const date = "2022-03-25T11:09:11.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

