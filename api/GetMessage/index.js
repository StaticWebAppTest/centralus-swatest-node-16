module.exports = async function (context, req) {
  const date = "2022-07-10T07:11:01.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

