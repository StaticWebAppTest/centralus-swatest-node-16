module.exports = async function (context, req) {
  const date = "2022-09-27T08:23:32.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

