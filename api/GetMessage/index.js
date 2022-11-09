module.exports = async function (context, req) {
  const date = "2022-11-09T01:02:08.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

