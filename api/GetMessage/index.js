module.exports = async function (context, req) {
  const date = "2022-04-30T07:10:45.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

