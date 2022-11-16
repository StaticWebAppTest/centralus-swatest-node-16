module.exports = async function (context, req) {
  const date = "2022-11-16T07:10:25.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

