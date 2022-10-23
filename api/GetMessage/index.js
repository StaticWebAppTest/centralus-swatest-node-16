module.exports = async function (context, req) {
  const date = "2022-10-23T17:23:06.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

