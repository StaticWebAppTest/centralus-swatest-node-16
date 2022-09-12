module.exports = async function (context, req) {
  const date = "2022-09-12T04:19:50.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

