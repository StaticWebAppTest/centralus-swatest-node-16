module.exports = async function (context, req) {
  const date = "2022-06-25T07:09:24.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

