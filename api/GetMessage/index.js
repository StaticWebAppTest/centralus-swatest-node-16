module.exports = async function (context, req) {
  const date = "2022-09-23T04:13:01.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

