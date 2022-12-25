module.exports = async function (context, req) {
  const date = "2022-12-25T19:07:10.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

