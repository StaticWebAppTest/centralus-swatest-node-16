module.exports = async function (context, req) {
  const date = "2023-10-14T23:08:12.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

