module.exports = async function (context, req) {
  const date = "2022-12-25T04:11:03.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

