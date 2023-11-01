module.exports = async function (context, req) {
  const date = "2023-11-01T17:08:13.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

