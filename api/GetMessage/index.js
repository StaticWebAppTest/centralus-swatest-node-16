module.exports = async function (context, req) {
  const date = "2024-02-28T21:08:30.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

