module.exports = async function (context, req) {
  const date = "2022-10-28T19:09:12.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

