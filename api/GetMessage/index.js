module.exports = async function (context, req) {
  const date = "2022-11-28T10:11:35.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

