module.exports = async function (context, req) {
  const date = "2022-12-25T02:10:40.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

