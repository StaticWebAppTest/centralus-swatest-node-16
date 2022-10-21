module.exports = async function (context, req) {
  const date = "2022-10-21T16:24:01.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

