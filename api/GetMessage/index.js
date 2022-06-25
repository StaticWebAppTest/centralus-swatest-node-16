module.exports = async function (context, req) {
  const date = "2022-06-25T17:10:25.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

