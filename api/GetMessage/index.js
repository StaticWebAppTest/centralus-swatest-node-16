module.exports = async function (context, req) {
  const date = "2023-11-16T23:09:12.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

