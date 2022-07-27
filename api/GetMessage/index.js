module.exports = async function (context, req) {
  const date = "2022-07-27T23:10:45.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

