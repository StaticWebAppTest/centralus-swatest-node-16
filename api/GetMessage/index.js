module.exports = async function (context, req) {
  const date = "2023-05-03T09:08:35.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

