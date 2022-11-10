module.exports = async function (context, req) {
  const date = "2022-11-10T16:15:39.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

