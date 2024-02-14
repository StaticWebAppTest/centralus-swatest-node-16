module.exports = async function (context, req) {
  const date = "2024-02-14T13:09:14.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

