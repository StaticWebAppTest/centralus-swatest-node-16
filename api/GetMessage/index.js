module.exports = async function (context, req) {
  const date = "2023-11-25T20:08:43.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

