module.exports = async function (context, req) {
  const date = "2024-09-05T06:15:36.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

