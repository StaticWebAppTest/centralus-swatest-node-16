module.exports = async function (context, req) {
  const date = "2022-10-11T11:11:54.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

