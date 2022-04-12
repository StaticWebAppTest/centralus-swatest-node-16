module.exports = async function (context, req) {
  const date = "2022-04-12T07:11:13.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

