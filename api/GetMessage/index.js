module.exports = async function (context, req) {
  const date = "2023-12-25T07:08:49.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

